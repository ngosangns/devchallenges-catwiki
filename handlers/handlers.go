package handlers

import (
	"catwiki/libs"
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

func GetBreedAPI(c echo.Context) error {
	id := c.Param("id")
	resp, err := libs.Get("https://api.thecatapi.com/v1/images/search?breed_ids=" + id)
	if err != nil {
		log.Fatalln(err)
		return err
	}
	return c.JSON(http.StatusOK, resp)
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
