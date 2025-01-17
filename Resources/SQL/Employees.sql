EmployeesCREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(100) NOT NULL,
    LastName VARCHAR(100) NOT NULL,
    Email VARCHAR(150) UNIQUE NOT NULL,
    PhoneNumber VARCHAR(15),
    HireDate DATE NOT NULL,
    DepartmentID INT,
    Salary DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);

-- Sample Data
INSERT INTO Employees (FirstName, LastName, Email, PhoneNumber, HireDate, DepartmentID, Salary)
VALUES
('John', 'Doe', 'john.doe@example.com', '1234567890', '2023-01-15', 3, 75000.00),
('Jane', 'Smith', 'jane.smith@example.com', '9876543210', '2022-08-01', 1, 50000.00),
('Bob', 'Johnson', 'bob.johnson@example.com', '5556667777', '2023-05-12', 2, 60000.00),
('Alice', 'Williams', 'alice.williams@example.com', NULL, '2021-11-20', 4, 65000.00);
