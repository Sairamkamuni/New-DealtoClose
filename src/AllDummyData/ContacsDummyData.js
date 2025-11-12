// Contact Table Dummy Data
export const allContacts = [
    { id: 1, contact_name: "Raj Kamuni", type: "Seller", title: "Listing Agent", phone: "+1 (903) 393-442", email: "Raj@Gmail.com", status: "Active", source: "Zillow.com", tags: "zillow", agent: "Sai Kamuni" },
    { id: 11, contact_name: "Raj Kamuni", type: "Buyer", title: "Listing Agent", phone: "+1 (903) 393-442", email: "Raj@Gmail.com", status: "Active", source: "Zillow.com", tags: "zillow", agent: "Sai Kamuni" },
    { id: 111, contact_name: "Raj Kamuni", type: "Lender", title: "Listing Agent", phone: "+1 (903) 393-442", email: "Raj@Gmail.com", status: "Active", source: "Zillow.com", tags: "zillow", agent: "Sai Kamuni" },
]

export const clientContacts = [
    { id: 2, contact_name: "Sai Ram Kamuni", type: "Landlord", title: "Listing Agent", phone: "+1 (903) 393-442", email: "Sai@Gmail.com", status: "Active", source: "Zillow.com", tags: "zillow", agent: "Raj Kamuni" },
    { id: 22, contact_name: "Sai Ram Kamuni", type: "Realtor", title: "Listing Agent", phone: "+1 (903) 393-442", email: "Sai@Gmail.com", status: "Active", source: "Zillow.com", tags: "zillow", agent: "Raj Kamuni" },
    { id: 222, contact_name: "Sai Ram Kamuni", type: "Title Company", title: "Listing Agent", phone: "+1 (903) 393-442", email: "Sai@Gmail.com", status: "Active", source: "Zillow.com", tags: "zillow", agent: "Raj Kamuni" },
]

export const collaboratorContacts = [
    { id: 3, contact_name: "Aadhya Kamuni", type: "Buyer Agent", title: "Listing Agent", phone: "+1 (903) 393-442", email: "Aadhya@Gmail.com", status: "Active", source: "Zillow.com", tags: "zillow", agent: "Raj Kamuni" },
    { id: 33, contact_name: "Aadhya Kamuni", type: "Seller Agent", title: "Listing Agent", phone: "+1 (903) 393-442", email: "Aadhya@Gmail.com", status: "Active", source: "Zillow.com", tags: "zillow", agent: "Raj Kamuni" },
    { id: 333, contact_name: "Aadhya Kamuni", type: "Seller", title: "Listing Agent", phone: "+1 (903) 393-442", email: "Aadhya@Gmail.com", status: "Active", source: "Zillow.com", tags: "zillow", agent: "Raj Kamuni" },
]

export const contactTypes = [
    "Buyer", "Seller", "Tenant", "Landlord", "Realtor",
    "Lender", "Title Company", "Escrow Agent", "HOA",
    "Inspector", "Insurance",
];
export const statusTypes = ["Active", "Inactive"]
export const sourceTypes = ["Website", "Referral", "Ad"]

export const FamilyMembersOption = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
]

export const RelationshipTypeOption = [
    { label: "Spouse", value: "Spouse" },
    { label: "Co-Worker", value: "Co-Worker" },
    { label: "Parent", value: "Parent" },
    { label: "Brother", value: "Brother" },
    { label: "Sister", value: "Sister" },
    { label: "Cousin", value: "Cousin" },
    { label: "Uncle", value: "Uncle" },
    { label: "Aunty", value: "Aunty" },
    { label: "Freind", value: "Freind" },
    { label: "Grand-Parent", value: "Grand Parent" },
]

export const SourceOption = [
    { label: "N/A", value: "N/A" },
    { label: "Sphere of Influence", value: "Sphere of Influence" },
    { label: "Personal Referral", value: "Personal Referral" },
    { label: "Office Lead", value: "Office Lead" },
    { label: "Agent Referral", value: "Agent Referral" },
    { label: "Zillow.com", value: "Zillow.com" },
    { label: "Zillow Flex", value: "Zillow Flex" },
    { label: "HomeLight", value: "HomeLight" },
    { label: "Effective Agent", value: "Effective Agent" },
    { label: "Marketing", value: "Marketing" },
    { label: "Facebook", value: "Facebook" },
    { label: "Instagram", value: "Instagram" },
    { label: "OpenHouse", value: "OpenHouse" },
    { label: "Walk-in", value: "Walk-in" },
    { label: "Call-In", value: "Call-In" },
]

export const TitleOption = [
    { label: "N/A", value: "N/A" },
    { label: "Listing Agent", value: "Listing Agent" },
    { label: "Listing Agent Managing Broker", value: "Listing Agent Managing Broker" },
    { label: "Listing Agent Transaction Coordinator", value: "Listing Agent Transaction Coordinator" },
    { label: "Listing Agent Assistant", value: "Listing Agent Assistant" },
    { label: "Co-Listing Agent", value: "Co-Listing Agent" },
    { label: "Buyer Agent", value: "Buyer Agent" },
    { label: "Buyer Agent Managing Broker", value: "Buyer Agent Managing Broker" },
    { label: "Buyer Agent Transaction Coordinator", value: "Buyer Agent Transaction Coordinator" },
    { label: "Buyer Agent Assistant", value: "Buyer Agent Assistant" },
    { label: "Co-Buyer Agent", value: "Co-Buyer Agent" },
    { label: "Lender", value: "Lender" },
    { label: "Loan Processor", value: "Loan Processor" },
    { label: "Title Co Manager", value: "Title Co Manager" },
    { label: "Title Co Processor", value: "Title Co Processor" },
    { label: "Title Co Closer", value: "Title Co Closer" },
    { label: "Escrow Agent", value: "Escrow Agent" },
    { label: "Escrow Processor", value: "Escrow Processor" },
    { label: "HOA Manager", value: "HOA Manager" },
    { label: "Inspector", value: "Inspector" },
    { label: "Insurance Agent", value: "Insurance Agent" },
    { label: "Insurance Assistant", value: "Insurance Assistant" },
]

export const TypeOption = [
    { label: "Buyer", value: "Buyer" },
    { label: "Seller", value: "Seller" },
    { label: "Tenant", value: "Tenant" },
    { label: "Landlord", value: "Landlord" },
    { label: "Realtor", value: "Realtor" },
    { label: "Lender", value: "Lender" },
    { label: "Title Company", value: "Title Company" },
    { label: "Escrow Agent", value: "Escrow Agent" },
    { label: "HOA", value: "HOA" },
    { label: "Inspector", value: "Inspector" },
    { label: "Insurance Agent", value: "Insurance Agent" },
]

export const StatusOption = [
    { label: "N/A", value: "N/A" },
    { label: "Active", value: "Active" },
    { label: "Under Contract", value: "Under Contract" },
    { label: "Closed", value: "Closed" },
    { label: "Cancelled", value: "Cancelled" },
]