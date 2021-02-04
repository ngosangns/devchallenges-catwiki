package handlers

import (
	"net/http"
	"os"

	"github.com/labstack/echo/v4"
)

// Handler
func Hello(c echo.Context) error {
	if _, err := os.Stat("web/dist" + c.Request().URL.Path); os.IsNotExist(err) {
		http.ServeFile(c.Response(), c.Request(), "web/dist/")
	}
	http.ServeFile(c.Response(), c.Request(), "web/dist"+c.Request().URL.Path)

	return nil
}

func HelloAPI(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}
