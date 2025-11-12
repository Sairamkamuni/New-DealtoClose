export const All = [
    { id: 1, property_address: "1111 SW 76th Ave, Miami, FL 33155, USA", client_name: "Sai Ram Kamuni", type: "Buyer", sub_type: "Offer", source: "Zillow", tags: "Hot Lead", creation_date: "Jun 25th, 2026", created_by: "Raj Kamuni" },
    { id: 2, property_address: "2222 SW 76th Ave, Miami, FL 33155, USA", client_name: "Raj Kamuni", type: "Seller", sub_type: "Listing", source: "Zillow", tags: "Hot Lead", creation_date: "Jun 25th, 2026", created_by: "Raj Kamuni" },
    { id: 3, property_address: "3333 SW 76th Ave, Miami, FL 33155, USA", client_name: "Aadhya Kamuni", type: "Buyer", sub_type: "Offer", source: "Zillow", tags: "Hot Lead", creation_date: "Jun 25th, 2026", created_by: "Raj Kamuni" },
];
export const Buyer = [
    { id: 1, property_address: "4444 SW 76th Ave, Miami, FL 33155, USA", client_name: "Sai Ram Kamuni", type: "Buyer", sub_type: "Offer", source: "Zillow", tags: "Hot Lead", creation_date: "Jun 25th, 2026", created_by: "Raj Kamuni" },
    { id: 2, property_address: "5555 SW 76th Ave, Miami, FL 33155, USA", client_name: "Raj Kamuni", type: "Buyer", sub_type: "Listing", source: "Zillow", tags: "Hot Lead", creation_date: "Jun 25th, 2026", created_by: "Raj Kamuni" },
    { id: 3, property_address: "6666 SW 76th Ave, Miami, FL 33155, USA", client_name: "Aadhya Kamuni", type: "Buyer", sub_type: "Offer", source: "Zillow", tags: "Hot Lead", creation_date: "Jun 25th, 2026", created_by: "Raj Kamuni" },
];
export const Seller = [
    { id: 1, property_address: "7777 SW 76th Ave, Miami, FL 33155, USA", client_name: "Sai Ram Kamuni", type: "Seller", sub_type: "Offer", source: "Zillow", tags: "Hot Lead", creation_date: "Jun 25th, 2026", created_by: "Raj Kamuni" },
    { id: 2, property_address: "8888 SW 76th Ave, Miami, FL 33155, USA", client_name: "Raj Kamuni", type: "Seller", sub_type: "Listing", source: "Zillow", tags: "Hot Lead", creation_date: "Jun 25th, 2026", created_by: "Raj Kamuni" },
    { id: 3, property_address: "9999 SW 76th Ave, Miami, FL 33155, USA", client_name: "Aadhya Kamuni", type: "Seller", sub_type: "Offer", source: "Zillow", tags: "Hot Lead", creation_date: "Jun 25th, 2026", created_by: "Raj Kamuni" },
];
export const preDealTabs = [
    { id: 1, label: "Pre-Deal Type" },
    { id: 2, label: "Property Details" },
    { id: 3, label: "Offer Details" },
    { id: 4, label: "Contact's" },
    { id: 5, label: "Dates" },
    { id: 6, label: "Additional Terms" },
]

export const PreDealClient = ["Agent 01", "Agent 02", "Agent 03", "Agent 04", "Agent 05"]
export const PreDealType = ["Buyer", "Seller", "Tenant", "Landlord"]
export const PreDealSubType = ["Offer", "Pre-Listing"]
export const PreDealSource = ["Zillow", "Referral", "Past Client", "Facebook", "Open House"]
export const PreDealTags = ["HotLead", "New Inquiry", "VIP", "Repeat", "Investor",]
export const PreDealCreatedBy = ["Agent 01", "Agent 02", "Agent 03", "Agent 04", "Agent 05"]

// Collapse Details Dummy Data
export const Representing = ["Buyer", "Seller", "Tenant", "Landlord"]
export const Type = ["Pre-Offer", "Pre-Listing",]

// Property Details Dummy Data
export const PropertyAddress = ["2650 SW 76th Ave #101,",]
export const PropertyCity = ["Miami, FL 33155, USA",]
export const County = ["Palm Beach"]
export const MLS = ["RX-1234568"]
export const Subdivision = ["Silver Lakes"]
export const HOAFee = ["$1,500.00"]

// --- Financial / Deal Details Dummy Data ---
export const PurchasePrice = ["$1,000,000"];
export const Deposit1st = ["$5,000.00"];
export const Deposit1stDueIn = ["03 Days"];
export const Deposit2nd = ["$15,000.00"];
export const Deposit2ndDueIn = ["10 Days"];
export const LoanToValue = ["80 % | $800,000"];
export const BalanceToClose = ["$25,026.52"];
export const LoanCommitmentPeriod = ["10 Days"];
export const InspectionPeriod = ["10 Days"];
export const CompensationToBuyersBroker = ["3 % | $30,000"];

// --- Offer / Closing Details ---
export const OfferExpiryDate = ["Nov 15, 2025"];
export const CloseDate = ["Dec 01, 2025"];

// --- Linked Deals / References ---
export const LinkedDealTitle = ["Linked Pre-Deal or Deal - Title of Deal"];
export const LinkedWebLinks = ["Web Link - 1", "Web Link - 2"];

export const preDealsFolderHeaderOptions = [
    { value: "rename", label: "Rename" },
    { value: "download", label: "Download" },
    { value: "duplicate_folder", label: "Duplicate Folder" },
    { value: "archive_folder", label: "Archive Folder" },
];

export const preDealsFoldersOptions = [
    { value: "open", label: "Open" },
    { value: "rRename", label: "Rename" },
    { value: "send_sign_request", label: "Send Sign Request" },
    { value: "cancel_sign_request", label: "Cancel Sign Request" },
    { value: "download", label: "Download" },
    { value: "print", label: "Print" },
    { value: "copy", label: "Copy To" },
    { value: "move", label: "Move To" },
    { value: "archive", label: "Archive" },
];

export const folders = [
    {
        folderName: "File Name 01",
        documents: [{ title: "Cash AS IS Residential Contract for Sale And Purchase (FAR/BAR ASIS-5x)", addedBy: "Raj Kamuni", Date: "Jun 25, 2025", Time: "10:31 AM EST", status: "Signed" },
        { title: "Executed Residential Contract for Sale And Purchase (FAR/BAR ASIS-5x)", addedBy: "Sai Kamuni", Date: "Jun 25, 2025", Time: "10:31 AM EST", status: "Request Signature" },
        { title: "Inspection Report", addedBy: "Raj Kamuni", Date: "Jun 25, 2025", Time: "10:31 AM EST", status: "Signature Requested" },
        { title: "Addendum to Contract", addedBy: "Raj Kamuni", addedBy: "Sai Kamuni", Date: "Jun 25, 2025", Time: "10:31 AM EST", status: "Signed" },
        { title: "Extension Addendum", addedBy: "Raj Kamuni", addedBy: "Sai Kamuni", Date: "Jun 25, 2025", Time: "10:31 AM EST", status: "Signature Requested" },
        ],
    },
    {
        folderName: "File Name 02",
        documents: [{ title: "Cash AS IS Residential Contract for Sale And Purchase (FAR/BAR ASIS-5x)", addedBy: "Raj Kamuni", Date: "Jun 25, 2025", Time: "10:31 AM EST", status: "Signed" },
        { title: "Executed Residential Contract for Sale And Purchase (FAR/BAR ASIS-5x)", addedBy: "Sai Kamuni", Date: "Jun 25, 2025", Time: "10:31 AM EST", status: "Request Signature" },
        { title: "Inspection Report", addedBy: "Raj Kamuni", Date: "Jun 25, 2025", Time: "10:31 AM EST", status: "Signature Requested" },
        { title: "Addendum to Contract", addedBy: "Raj Kamuni", addedBy: "Sai Kamuni", Date: "Jun 25, 2025", Time: "10:31 AM EST", status: "Signed" },
        { title: "Extension Addendum", addedBy: "Raj Kamuni", addedBy: "Sai Kamuni", Date: "Jun 25, 2025", Time: "10:31 AM EST", status: "Signature Requested" },
        ],
    },
];

export const contacts = [
    {
        contactTitle: "Buyer's Agent",
        contactNames: [
            { name: "Raj Kamuni", role: "Buyer Agent", company: "DTC", phone: "561-000-0000", email: "BA@Gmail.com" },
            { name: "Sai Kamuni", role: "Co-Buyer Agent", company: "DTC", phone: "561-000-0000", email: "BAS@Gmail.com" },
        ],
    },
    {
        contactTitle: "Buyer's",
        contactNames: [
            { name: "Praveen Kumar", role: "Buyer", phone: "561-000-0000", email: "Buyre@Gmail.com" },
            { name: "Praveen Kumar", role: "Buyer", phone: "561-000-0000", email: "Buyre@Gmail.com" },
        ],
    },
    {
        contactTitle: "Seller's Agent",
        contactNames: [
            { name: "Kamuni Sai", role: "Co-Seller Agent", company: "DTC", phone: "561-000-0000", email: "LAS@Gmail.com" },
            { name: "Raj Kamuni", role: "Seller Agent", company: "DTC", phone: "561-000-0000", email: "LA@Gmail.com" },
        ],
    },
]

export const noteText1 = "Received preliminary approval from the lender. Waiting on final documents."
export const noteText2 = "Initial client conversation was positive. They are very interested in moving forward quickly."
export const noteAgentUser = "Alice Agent";
export const noteDate = "Sep 17, 2025";
export const noteTime = "5:40 AM";