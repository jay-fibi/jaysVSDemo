#!/usr/bin/env python3
"""
Go File Generator - Creates an amazing Go CLI utility script
"""

def generate_go_file():
    go_code = '''package main

import (
    "bufio"
    "crypto/md5"
    "encoding/hex"
    "fmt"
    "io"
    "log"
    "math/rand"
    "net/http"
    "os"
    "strconv"
    "strings"
    "time"
)

func main() {
    if len(os.Args) < 2 {
        showHelp()
        return
    }

    command := os.Args[1]
    
    switch command {
    case "hash":
        if len(os.Args) < 3 {
            fmt.Println("Usage: amazing hash <text>")
            return
        }
        hashText(strings.Join(os.Args[2:], " "))
    case "password":
        length := 12
        if len(os.Args) > 2 {
            if l, err := strconv.Atoi(os.Args[2]); err == nil {
                length = l
            }
        }
        generatePassword(length)
    case "server":
        port := "8080"
        if len(os.Args) > 2 {
            port = os.Args[2]
        }
        startServer(port)
    case "fortune":
        showFortune()
    case "count":
        if len(os.Args) < 3 {
            fmt.Println("Usage: amazing count <filename>")
            return
        }
        countLines(os.Args[2])
    default:
        showHelp()
    }
}

func showHelp() {
    fmt.Println("🚀 Amazing Go CLI Utility")
    fmt.Println("Usage: amazing <command> [args]")
    fmt.Println("")
    fmt.Println("Commands:")
    fmt.Println("  hash <text>     - Generate MD5 hash of text")
    fmt.Println("  password [len]  - Generate random password (default: 12)")
    fmt.Println("  server [port]   - Start HTTP server (default: 8080)")
    fmt.Println("  fortune         - Show random fortune")
    fmt.Println("  count <file>    - Count lines in file")
    fmt.Println("  help           - Show this help")
}

func hashText(text string) {
    hasher := md5.New()
    hasher.Write([]byte(text))
    hash := hex.EncodeToString(hasher.Sum(nil))
    fmt.Printf("MD5: %s\\n", hash)
}

func generatePassword(length int) {
    chars := "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
    rand.Seed(time.Now().UnixNano())
    
    password := make([]byte, length)
    for i := range password {
        password[i] = chars[rand.Intn(len(chars))]
    }
    
    fmt.Printf("Generated password: %s\\n", string(password))
}

func startServer(port string) {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, `
        <html>
        <head><title>Amazing Go Server</title></head>
        <body>
            <h1>🚀 Amazing Go Server is Running!</h1>
            <p>Time: %s</p>
            <p>Your IP: %s</p>
            <p>User Agent: %s</p>
        </body>
        </html>
        `, time.Now().Format(time.RFC3339), r.RemoteAddr, r.UserAgent())
    })
    
    http.HandleFunc("/api/time", func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "application/json")
        fmt.Fprintf(w, `{"time": "%s", "unix": %d}`, time.Now().Format(time.RFC3339), time.Now().Unix())
    })
    
    fmt.Printf("🌐 Server starting on http://localhost:%s\\n", port)
    log.Fatal(http.ListenAndServe(":"+port, nil))
}

func showFortune() {
    fortunes := []string{
        "Code is like humor. When you have to explain it, it's bad.",
        "There are only two hard things in Computer Science: cache invalidation and naming things.",
        "Programming is thinking, not typing.",
        "The best error message is the one that never shows up.",
        "Simplicity is the ultimate sophistication.",
        "Make it work, make it right, make it fast.",
        "Code never lies, comments sometimes do.",
        "Programming is the art of doing one thing at a time.",
    }
    
    rand.Seed(time.Now().UnixNano())
    fortune := fortunes[rand.Intn(len(fortunes))]
    fmt.Printf("💡 %s\\n", fortune)
}

func countLines(filename string) {
    file, err := os.Open(filename)
    if err != nil {
        fmt.Printf("Error opening file: %v\\n", err)
        return
    }
    defer file.Close()
    
    scanner := bufio.NewScanner(file)
    lines := 0
    words := 0
    chars := 0
    
    for scanner.Scan() {
        lines++
        line := scanner.Text()
        chars += len(line) + 1 // +1 for newline
        words += len(strings.Fields(line))
    }
    
    if err := scanner.Err(); err != nil {
        fmt.Printf("Error reading file: %v\\n", err)
        return
    }
    
    fmt.Printf("📊 File stats for %s:\\n", filename)
    fmt.Printf("  Lines: %d\\n", lines)
    fmt.Printf("  Words: %d\\n", words)
    fmt.Printf("  Chars: %d\\n", chars)
}
'''
    
    with open('amazing.go', 'w') as f:
        f.write(go_code)
    
    print("✅ Generated amazing.go - A multi-purpose CLI utility!")
    print("\nTo use:")
    print("1. go run amazing.go help")
    print("2. go build amazing.go && ./amazing help")

if __name__ == "__main__":
    generate_go_file()
