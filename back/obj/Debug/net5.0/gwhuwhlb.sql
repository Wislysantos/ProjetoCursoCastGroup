IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [Categoria] (
    [CategoriaId] int NOT NULL IDENTITY,
    [Descricao] nvarchar(50) NOT NULL,
    CONSTRAINT [PK_Categoria] PRIMARY KEY ([CategoriaId])
);
GO

CREATE TABLE [Cursos] (
    [CursoID] int NOT NULL IDENTITY,
    [NomeCurso] nvarchar(50) NOT NULL,
    [QtdAlunos] int NOT NULL,
    [DtInicio] date NOT NULL,
    [DtTermino] date NOT NULL,
    [Descricao] nvarchar(200) NOT NULL,
    [Categoria] nvarchar(50) NOT NULL,
    CONSTRAINT [PK_Cursos] PRIMARY KEY ([CursoID])
);
GO

CREATE TABLE [Log] (
    [LogID] int NOT NULL IDENTITY,
    [DataInclucao] date NOT NULL,
    [DataAtualicao] date NOT NULL,
    [Operacao] nvarchar(30) NOT NULL,
    [nomeCurso] nvarchar(30) NOT NULL,
    CONSTRAINT [PK_Log] PRIMARY KEY ([LogID])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20211118190153_inicioDB', N'5.0.12');
GO

COMMIT;
GO

