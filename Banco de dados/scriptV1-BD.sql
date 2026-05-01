 
 CREATE DATABASE morningdelivery;
 USE morningdelivery;
 
 CREATE TABLE usuario (
 idUsuario 	INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(45) NOT NULL,
 email VARCHAR(45) UNIQUE NOT NULL,
 senha VARCHAR(45) NOT NULL
 );
 
 CREATE TABLE humor (
 idHumor INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(45) NOT NULL
 );
 
 CREATE TABLE dia (
 idDia INT PRIMARY KEY AUTO_INCREMENT,
 dia DATE DEFAULT (CURRENT_DATE),
	CONSTRAINT diaUnico UNIQUE (fkUsuario, dia) ,
 fkUsuario INT NOT NULL,
	CONSTRAINT chFkUsuario
    FOREIGN KEY (fkUsuario)
    REFERENCES usuario(idUsuario),
 fkHumor INT, 
	CONSTRAINT chFkHumor
    FOREIGN KEY (fkHumor)
    REFERENCES humor(idHumor),
 registroDiario VARCHAR(255)
 );
 
 CREATE TABLE tarefa (
 idTarefa INT PRIMARY KEY AUTO_INCREMENT,
 fkUsuario INT NOT NULL,
	CONSTRAINT chFkUsuarioTarefa
    FOREIGN KEY (fkUsuario)
    REFERENCES usuario(idUsuario),
 fkTarefaPai INT,
	CONSTRAINT chFkTarefaPai
    FOREIGN KEY (fkTarefaPai)
    REFERENCES tarefa(idTarefa),
 titulo VARCHAR(45) NOT NULL,
 statusTarefa BOOLEAN NOT NULL
 );
 
 CREATE TABLE agenda (
 idAgenda INT PRIMARY KEY AUTO_INCREMENT,
 fkDia INT NOT NULL,
	CONSTRAINT chFkDia
    FOREIGN KEY (fkDia)
    REFERENCES dia(idDia),
 periodo VARCHAR(20),
	CONSTRAINT chPeriodo 
    CHECK (periodo IN ('manha', 'tarde', 'noite')),
 tarefa VARCHAR(100),
 UNIQUE (fkDia, periodo, tarefa), -- nao ter tarefas duplicadas
 statusTarefa BOOLEAN
 );
 
INSERT INTO usuario (nome, email, senha) VALUES
('Ana Silva', 'ana@email.com', '123'),
('Carlos Souza', 'carlos@email.com', '456');

INSERT INTO humor (nome) VALUES
('feliz'),
('triste'),
('cansado'),
('animado');
 
 INSERT INTO dia (dia, fkUsuario, fkHumor, registroDiario) VALUES
('2026-05-01', 1, 1, 'Dia produtivo, consegui estudar bastante'),
('2026-05-01', 2, 3, 'Dia cansativo no trabalho'),
('2026-05-02', 1, 4, 'Mais animada hoje, voltei a treinar');

INSERT INTO tarefa (fkUsuario, fkTarefaPai, titulo, statusTarefa) VALUES
(1, NULL, 'Estudar SQL', FALSE),
(1, NULL, 'Fazer exercícios', FALSE),
(1, 2, 'Agachamento', FALSE),
(2, NULL, 'Lavar roupa', FALSE);

INSERT INTO agenda (fkDia, periodo, tarefa, statusTarefa) VALUES
(1, 'manha', 'Estudar SQL', FALSE),
(1, 'manha', 'Ler documentação', TRUE),
(1, 'tarde', 'Fazer exercícios', FALSE),

(2, 'manha', 'Reunião de trabalho', TRUE),
(2, 'tarde', 'Responder emails', FALSE),

(3, 'manha', 'Treino na academia', TRUE),
(3, 'noite', 'Estudar algoritmos', FALSE);

SELECT * FROM usuario;
SELECT * FROM humor;
SELECT * FROM dia;
SELECT * FROM tarefa;
SELECT * FROM agenda;
 