CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY AUTO_INCREMENT,
    DepartmentName VARCHAR(100) NOT NULL
);

-- Sample Data
INSERT INTO Departments (DepartmentName)
VALUES ('Human Resources'), ('Finance'), ('Engineering'), ('Marketing');
