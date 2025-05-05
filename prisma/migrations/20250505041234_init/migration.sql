-- CreateTable
CREATE TABLE `Kupon` (
    `id_kupon` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `unit_kerja` VARCHAR(191) NOT NULL,
    `kehadiran` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id_kupon`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hadiah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_kupon` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `hadiah` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Hadiah_id_kupon_key`(`id_kupon`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Hadiah` ADD CONSTRAINT `Hadiah_id_kupon_fkey` FOREIGN KEY (`id_kupon`) REFERENCES `Kupon`(`id_kupon`) ON DELETE RESTRICT ON UPDATE CASCADE;
