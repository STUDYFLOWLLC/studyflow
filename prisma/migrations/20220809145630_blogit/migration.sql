-- CreateTable
CREATE TABLE "Blog" (
    "BlogID" TEXT NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "DeletedTime" TIMESTAMP(3),
    "FK_UserID" INTEGER,
    "Title" TEXT NOT NULL DEFAULT E'',
    "Body" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("BlogID")
);

-- CreateTable
CREATE TABLE "BugReport" (
    "BugReportID" TEXT NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "DeletedTime" TIMESTAMP(3),
    "FK_UserID" INTEGER,
    "Title" TEXT NOT NULL DEFAULT E'',
    "Body" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "BugReport_pkey" PRIMARY KEY ("BugReportID")
);

-- CreateTable
CREATE TABLE "FeatureRequest" (
    "FeatureRequestID" TEXT NOT NULL,
    "CreatedTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "DeletedTime" TIMESTAMP(3),
    "FK_UserID" INTEGER,
    "Title" TEXT NOT NULL DEFAULT E'',
    "Body" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "FeatureRequest_pkey" PRIMARY KEY ("FeatureRequestID")
);

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_FK_UserID_fkey" FOREIGN KEY ("FK_UserID") REFERENCES "User"("UserID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BugReport" ADD CONSTRAINT "BugReport_FK_UserID_fkey" FOREIGN KEY ("FK_UserID") REFERENCES "User"("UserID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeatureRequest" ADD CONSTRAINT "FeatureRequest_FK_UserID_fkey" FOREIGN KEY ("FK_UserID") REFERENCES "User"("UserID") ON DELETE SET NULL ON UPDATE CASCADE;
