package libs

import (
	"errors"
	"os"
)

// GetAPIKey Get API key from environment
func GetAPIKey() (string, error) {
	key := os.Getenv("APIKEY")
	if key == "" {
		return "", errors.New("$APIKEY must be set")
	}
	return key, nil
}
