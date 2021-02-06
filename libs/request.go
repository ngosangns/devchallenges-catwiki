package libs

import (
	"io/ioutil"
	"log"
	"net/http"
)

// Get Make a GET request with APIKEY be set default
func Get(url string) (string, error) {
	// Get APIKEY
	key, err := GetAPIKey()
	if err != nil {
		log.Fatalln(err)
		return "", err
	}
	// Make request
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		log.Fatalln(err)
		return "", err
	}
	// Set headers
	req.Header.Set("x-api-key", key)
	// Get response
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatalln(err)
		return "", err
	}
	// Read the response body on the line below.
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
		return "", err
	}
	// Convert the body to type string
	sb := string(body)
	return sb, nil
}
