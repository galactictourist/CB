CREATE TABLE Bull (
	id INTEGER PRIMARY KEY,
	active INTEGER,
	name TEXT,
	regNum TEXT,
	dateOfBirth TEXT,
	birthWeight REAL,
	breed TEXT,
	color TEXT,
	specialMarkings TEXT,
	importExport TEXT,
	earTag TEXT,
	earTagLoc TEXT,
	brandNum TEXT,
	brandNumLoc TEXT,
	tattoo TEXT,
	tattooLoc TEXT,
	electronicId TEXT,
	electronicIdLoc TEXT,
	otherId TEXT,
	otherIdLoc TEXT,
	metalId TEXT,
	metalIdLoc TEXT,
	genetic TEXT,
	bloodline TEXT,
	siblingCode TEXT,
	cloned TEXT,
	showAnimal INTEGER,
	aiBull INTEGER,
	reference INTEGER,
	hornStatus TEXT,
	origin TEXT,
	imagePath TEXT,
	pasture TEXT,
	pen TEXT,
	currBullOwner TEXT,
	bullSire TEXT,
	bullDame TEXT,
	comments TEXT,
	purchaseFrom TEXT,
	purchaseDate TEXT,
	price REAL,
	breeder TEXT
);

CREATE TABLE Cow (
	id INTEGER PRIMARY KEY,
	active INTEGER,
	name TEXT,
	regNum TEXT,
	dateOfBirth TEXT,
	birthWeight REAL,
	breed TEXT,
	color TEXT,
	specialMarkings TEXT,
	importExport TEXT,
	earTag TEXT,
	earTagLoc TEXT,
	brandNum TEXT,
	brandNumLoc TEXT,
	tattoo TEXT,
	tattooLoc TEXT,
	electronicId TEXT,
	electronicIdLoc TEXT,
	otherId TEXT,
	otherIdLoc TEXT,
	metalId TEXT,
	metalIdLoc TEXT,
	genetic TEXT,
	bloodline TEXT,
	siblingCode TEXT,
	cloned TEXT,
	showAnimal INTEGER,
	aiCow INTEGER,
	reference INTEGER,
	hornStatus TEXT,
	origin TEXT,
	imagePath TEXT,
	pasture TEXT,
	pen TEXT,
	currCowOwner TEXT,
	cowSire TEXT,
	cowDame TEXT,
	comments TEXT,
	purchaseFrom TEXT,
	purchaseDate TEXT,
	price REAL,
	breeder TEXT
);

CREATE TABLE BullMortality (
	bullId INTEGER,
	CONSTRAINT BullMortality_Bull_FK FOREIGN KEY (bullId) REFERENCES Bull(id)
		ON DELETE CASCADE ON UPDATE CASCADE
);

-- INDEXES
CREATE INDEX Bull_active_IDX ON Bull (active) ;
CREATE INDEX Bull_name_IDX ON Bull (name) ;

CREATE INDEX Cow_active_IDX ON Cow (active) ;
CREATE INDEX Cow_name_IDX ON Cow (name) ;
