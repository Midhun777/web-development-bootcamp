CREATE TABLE EmployeeProjects (
    EmployeeProjectID INT PRIMARY KEY AUTO_INCREMENT,
    EmployeeID INT,
    ProjectID INT,
    AssignmentDate DATE NOT NULL,
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID),
    FOREIGN KEY (ProjectID) REFERENCES Projects(ProjectID)
);

-- Sample Data
INSERT INTO EmployeeProjects (EmployeeID, ProjectID, AssignmentDate)
VALUES
(1, 1, '2023-02-15'),
(2, 2, '2023-03-20'),
(3, 3, '2024-01-10'),
(4, 1, '2023-02-15');
