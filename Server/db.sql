USE VHX_DataBase;

CREATE TABLE Messages (
    name VARCHAR(255), 
    email VARCHAR(255) NOT NULL, 
    text TEXT NOT NULL,
    messsage_send timestamp NULL DEFAULT CURRENT_TIMESTAMP
);
