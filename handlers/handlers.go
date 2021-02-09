package handlers

import (
	"catwiki/libs"
	"errors"
	"log"
	"net/http"
	"os"

	"github.com/labstack/echo/v4"
)

// Hello Handler for web request
func Hello(c echo.Context) error {
	if _, err := os.Stat("web/dist" + c.Request().URL.Path); os.IsNotExist(err) {
		http.ServeFile(c.Response(), c.Request(), "web/dist/")
	}
	http.ServeFile(c.Response(), c.Request(), "web/dist"+c.Request().URL.Path)

	return nil
}

// HelloAPI Handler for API request
func HelloAPI(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

// GetBreedsAPI Hander for get breeds
func GetBreedsAPI(c echo.Context) error {
	resp, err := libs.Get("https://api.thecatapi.com/v1/breeds")
	if err != nil {
		log.Fatalln(err)
		return err
	}
	return c.JSON(http.StatusOK, resp)
}

func chanGet(url string, c chan string) {
	resp, err := libs.Get(url)
	if err != nil {
		log.Fatalln(err)
		c <- ""
	}
	c <- resp
}

// GetBreedAPI Hander for get breed by id
func GetBreedAPI(c echo.Context) error {
	id := c.Param("id")
	pipe := make(chan string)

	go chanGet("https://api.thecatapi.com/v1/images/search?breed_ids="+id, pipe)
	go chanGet("https://api.thecatapi.com/v1/images/search?breed_ids="+id+"&limit=8", pipe)
	otherImages := <-pipe
	info := <-pipe

	if info == "" || otherImages == "" {
		err := errors.New("No data")
		log.Fatalln(err)
		return err
	}

	if len(otherImages) < len(info) {
		libs.SwapString(&otherImages, &info)
	}

	return c.JSON(http.StatusOK, "{\"info\": "+info+", \"other_images\": "+otherImages+"}")
}

func GetImageAPI(c echo.Context) error {
	id := c.Param("id")
	resp, err := libs.Get("https://api.thecatapi.com/v1/images/" + id)
	if err != nil {
		log.Fatalln(err)
		return err
	}
	return c.JSON(http.StatusOK, resp)
}

func SearchAPI(c echo.Context) error {
	q := c.QueryParam("q")
	resp, err := libs.Get("https://api.thecatapi.com/v1/breeds/search?q=" + q)
	if err != nil {
		log.Fatalln(err)
		return err
	}
	return c.JSON(http.StatusOK, resp)
}
