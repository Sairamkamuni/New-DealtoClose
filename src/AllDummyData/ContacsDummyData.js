// Contact Table Dummy Data
export const allContacts = [
    {
        id: 1, contact_name: "Raj Kamuni", type: "Seller", title: "Listing Agent", phone: "+1 (903) 393-442",
        email: "Raj@Gmail.com", status: "Active", source: "Zillow.com", tags: "zillow", agent: "Sai Kamuni"
    },
    {
        id: 11, contact_name: "Raj Kamuni", type: "Buyer", title: "Listing Agent", phone: "+1 (903) 393-442",
        email: "Raj@Gmail.com", status: "Active", source: "Zillow.com", tags: "zillow", agent: "Sai Kamuni"
    },
    {
        id: 111, contact_name: "Raj Kamuni", type: "Lender", title: "Listing Agent", phone: "+1 (903) 393-442",
        email: "Raj@Gmail.com", status: "Active", source: "Zillow.com", tags: "zillow", agent: "Sai Kamuni"
    },
]

export const clientContacts = [
    {
        id: 2, contact_name: "Sai Ram Kamuni", type: "Landlord", title: "Listing Agent", phone: "+1 (903) 393-442",
        email: "Sai@Gmail.com", status: "Active", source: "Zillow.com", tags: "zillow", agent: "Raj Kamuni"
    },
    {
        id: 22, contact_name: "Sai Ram Kamuni", type: "Realtor", title: "Listing Agent", phone: "+1 (903) 393-442",
        email: "Sai@Gmail.com", status: "Active", source: "Zillow.com", tags: "zillow", agent: "Raj Kamuni"
    },
    {
        id: 222, contact_name: "Sai Ram Kamuni", type: "Title Company", title: "Listing Agent", phone: "+1 (903) 393-442",
        email: "Sai@Gmail.com", status: "Active", source: "Zillow.com", tags: "zillow", agent: "Raj Kamuni"
    },
]

export const collaboratorContacts = [
    {
        id: 3, contact_name: "Aadhya Kamuni", type: "Buyer Agent", title: "Listing Agent", phone: "+1 (903) 393-442",
        email: "Aadhya@Gmail.com", status: "Active", source: "Zillow.com", tags: "zillow", agent: "Raj Kamuni"
    },
    {
        id: 33, contact_name: "Aadhya Kamuni", type: "Seller Agent", title: "Listing Agent", phone: "+1 (903) 393-442",
        email: "Aadhya@Gmail.com", status: "Active", source: "Zillow.com", tags: "zillow", agent: "Raj Kamuni"
    },
    {
        id: 333, contact_name: "Aadhya Kamuni", type: "Seller", title: "Listing Agent", phone: "+1 (903) 393-442",
        email: "Aadhya@Gmail.com", status: "Active", source: "Zillow.com", tags: "zillow", agent: "Raj Kamuni"
    },
]

export const contactTypes = [
    "Buyer", "Seller", "Tenant", "Landlord", "Realtor",
    "Lender", "Title Company", "Escrow Agent", "HOA",
    "Inspector", "Insurance",
];
export const statusTypes = ["Active", "Inactive"]
export const sourceTypes = ["Website", "Referral", "Ad"]

export const FamilyMembersOption = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
];

export const RelationshipTypeOption = [
    { value: 1, label: "Spouse" },
    { value: 2, label: "Co-Worker" },
    { value: 3, label: "Parent" },
    { value: 4, label: "Brother" },
    { value: 5, label: "Sister" },
    { value: 6, label: "Cousin" },
    { value: 7, label: "Uncle" },
    { value: 8, label: "Aunty" },
    { value: 9, label: "Freind" },
    { value: 10, label: "Grand-Parent" },
];

export const SourceOption = [
    { value: 1, label: "N/A" },
    { value: 2, label: "Sphere of Influence" },
    { value: 3, label: "Personal Referral" },
    { value: 4, label: "Office Lead" },
    { value: 5, label: "Agent Referral" },
    { value: 6, label: "Zillow.com" },
    { value: 7, label: "Zillow Flex" },
    { value: 8, label: "HomeLight" },
    { value: 9, label: "Effective Agent" },
    { value: 10, label: "Marketing" },
    { value: 11, label: "Facebook" },
    { value: 12, label: "Instagram" },
    { value: 13, label: "OpenHouse" },
    { value: 14, label: "Walk-in" },
    { value: 15, label: "Call-In" },
];

export const TagsOption = [
    { value: 1, label: "VIP" },
    { value: 2, label: "Past Client" },
    { value: 3, label: "Investor" },
    { value: 4, label: "Preferred Vendor" },
    { value: 5, label: "Hot Lead" },
    { value: 6, label: "New Lead" },
];

export const TitleOption = [
    { value: 1, label: "N/A" },
    { value: 2, label: "Listing Agent" },
    { value: 3, label: "Listing Agent Managing Broker" },
    { value: 4, label: "Listing Agent Transaction Coordinator" },
    { value: 5, label: "Listing Agent Assistant" },
    { value: 6, label: "Co-Listing Agent" },
    { value: 7, label: "Buyer Agent" },
    { value: 8, label: "Buyer Agent Managing Broker" },
    { value: 9, label: "Buyer Agent Transaction Coordinator" },
    { value: 10, label: "Buyer Agent Assistant" },
    { value: 11, label: "Co-Buyer Agent" },
    { value: 12, label: "Lender" },
    { value: 13, label: "Loan Processor" },
    { value: 14, label: "Title Co Manager" },
    { value: 15, label: "Title Co Processor" },
    { value: 16, label: "Title Co Closer" },
    { value: 17, label: "Escrow Agent" },
    { value: 18, label: "Escrow Processor" },
    { value: 19, label: "HOA Manager" },
    { value: 20, label: "Inspector" },
    { value: 21, label: "Insurance Agent" },
    { value: 22, label: "Insurance Assistant" },
];

export const TypeOption = [
    { value: 1, label: "Buyer" },
    { value: 2, label: "Seller" },
    { value: 3, label: "Tenant" },
    { value: 4, label: "Landlord" },
    { value: 5, label: "Realtor" },
    { value: 6, label: "Lender" },
    { value: 7, label: "Title Company" },
    { value: 8, label: "Escrow Agent" },
    { value: 9, label: "HOA" },
    { value: 10, label: "Inspector" },
    { value: 11, label: "Insurance Agent" },
];

export const StatusOption = [
    { value: 1, label: "N/A" },
    { value: 2, label: "Active" },
    { value: 3, label: "Under Contract" },
    { value: 4, label: "Closed" },
    { value: 5, label: "Cancelled" },
];

export const AgentsName = [
    { value: 1, label: "Sai Kamuni" },
    { value: 2, label: "Usha Kamuni" },
    { value: 3, label: "Raj Kamuni" },
    { value: 4, label: "Praveen Kumar" },
];