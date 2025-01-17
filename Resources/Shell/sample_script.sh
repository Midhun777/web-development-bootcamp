echo "Welcome to the sample shell script!"

read -p "Enter the filename to check: " filename

if [[ -e "$filename" ]]; then
    echo "File '$filename' exists."
    
    line_count=$(wc -l < "$filename")
    echo "The file '$filename' has $line_count lines."
else
    echo "File '$filename' does not exist."
fi

echo "Thank you for using this script!"
