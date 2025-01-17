def sort_array(arr):
    """
    This function takes an array as input and returns a sorted version of it.
    """
    if not arr:
        print("The array is empty.")
        return arr

    sorted_arr = sorted(arr)
    return sorted_arr

if __name__ == "__main__":
    array = [34, 7, 23, 32, 5, 62]
    
    print("Original Array:", array)
    
    sorted_array = sort_array(array)
    
    print("Sorted Array:", sorted_array)
