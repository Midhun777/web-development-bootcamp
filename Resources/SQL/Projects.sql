CREATE TABLE Projects (
    ProjectID INT PRIMARY KEY AUTO_INCREMENT,
    ProjectName VARCHAR(100) NOT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE,
    Budget DECIMAL(15, 2)
);

-- Sample Data
INSERT INTO Projects (ProjectName, StartDate, EndDate, Budget)
VALUES
('Website Redesign', '2023-02-01', '2023-06-01', 20000.00),
('Marketing Campaign', '2023-03-15', '2023-09-15', 15000.00),
('New Product Launch', '2024-01-01', NULL, 50000.00);