package main

import (
	"catwiki/handlers"
	"log"
	"os"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	// Get port
	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("$PORT must be set")
	}

	// Echo instance
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Routes
	e.GET("/api/breeds/", handlers.GetBreedsAPI)
	e.GET("/api/breed/:id", handlers.GetBreedAPI)
	e.GET("/api/search/", handlers.SearchAPI)
	e.GET("/api/image/:id", handlers.GetImageAPI)
	e.GET("/api/", handlers.HelloAPI)
	e.GET("/*", handlers.Hello)
	go e.Logger.Fatal(e.Start(":" + port))
}
