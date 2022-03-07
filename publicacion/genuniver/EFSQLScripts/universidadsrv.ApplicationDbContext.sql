IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220305225138_inicial')
BEGIN
    CREATE TABLE [Favoritos] (
        [Id] int NOT NULL IDENTITY,
        [name] varchar(100) NOT NULL,
        [country] varchar(16) NOT NULL,
        [web_pages] varchar(100) NOT NULL,
        [image] varchar(200) NOT NULL,
        [Status] varchar(1) NOT NULL,
        CONSTRAINT [PK_Favoritos] PRIMARY KEY ([Id])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220305225138_inicial')
BEGIN
    CREATE TABLE [Universidades] (
        [Id] int NOT NULL IDENTITY,
        [name] varchar(100) NOT NULL,
        [country] varchar(16) NOT NULL,
        [web_pages] varchar(100) NOT NULL,
        [image] varchar(200) NOT NULL,
        [Status] varchar(1) NOT NULL,
        CONSTRAINT [PK_Universidades] PRIMARY KEY ([Id])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220305225138_inicial')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20220305225138_inicial', N'3.1.4');
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220306152758_imagelocal')
BEGIN
    ALTER TABLE [Favoritos] ADD [imagelocal] varchar(400) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220306152758_imagelocal')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20220306152758_imagelocal', N'3.1.4');
END;

GO

