export const TaskDummyData = [
    {
        task_name: "Follow up with client", assigned_to: "Seller", date_of_action: "Nov 21, 2025", deal_name: "123 Main St Deal",
        status: "Pending", client_type: "Buyer", type: "Deal", checklist_type: "Task", closing_date: "Jan 01, 2025"
    },
    {
        task_name: "Schedule property showing", assigned_to: "Buyer Agent", date_of_action: "Nov 18, 2025", deal_name: "678 Willow Ave Deal",
        status: "In Progress", client_type: "Buyer", type: "Deal", checklist_type: "Task", closing_date: "Dec 15, 2025"
    },
    {
        task_name: "Review inspection report", assigned_to: "Seller", date_of_action: "Nov 20, 2025", deal_name: "45 Ocean Drive Deal",
        status: "Completed", client_type: "Seller", type: "Listing", checklist_type: "Document", closing_date: "Jan 10, 2026"
    },
    {
        task_name: "Send contract for signature", assigned_to: "Transaction Coordinator", date_of_action: "Nov 22, 2025", deal_name: "92 Lincoln Park Deal",
        status: "Pending", client_type: "Buyer", type: "Deal", checklist_type: "Task", closing_date: "Jan 05, 2026"
    },
    {
        task_name: "Upload HOA docs", assigned_to: "Seller Agent", date_of_action: "Nov 19, 2025", deal_name: "210 Palm Crest Deal",
        status: "Overdue", client_type: "Seller", type: "Listing", checklist_type: "Document", closing_date: "Dec 30, 2025"
    },
    {
        task_name: "Verify escrow deposit", assigned_to: "Transaction Coordinator", date_of_action: "Nov 23, 2025", deal_name: "14 Riverside Blvd Deal",
        status: "Completed", client_type: "Buyer", type: "Deal", checklist_type: "Task", closing_date: "Jan 18, 2026"
    },
    {
        task_name: "Confirm appraisal date", assigned_to: "Buyer Agent", date_of_action: "Nov 17, 2025", deal_name: "500 Sunset Bay Deal",
        status: "Pending", client_type: "Buyer", type: "Deal", checklist_type: "Task", closing_date: "Dec 28, 2025"
    },
    {
        task_name: "Prepare closing documents", assigned_to: "Title Company", date_of_action: "Nov 25, 2025", deal_name: "89 Coral Springs Deal",
        status: "In Progress", client_type: "Seller", type: "Deal", checklist_type: "Document", closing_date: "Jan 22, 2026"
    }
];

export const TaskAssignedTo = [
    { value: 1, label: "Sai Kamuni" },
    { value: 2, label: "Usha Kamuni" },
    { value: 3, label: "Raj Kamuni" },
    { value: 4, label: "Praveen Kumar" },
    { value: 5, label: "Pooja" },
    { value: 6, label: "Nitin Kasturi" },
    { value: 7, label: "Lalit" },
    { value: 8, label: "Jay Deep" },
    { value: 9, label: "Anikesh" },
];

export const TaskStatus = [
    { value: 1, label: "Pending" },
    { value: 2, label: "Completed" },
];

export const DealDummyData = [
    {
        property_address: "123 Main St, Miami, FL", closing_date: "Jan 12, 2026", client_name: "John Peterson",
        sale_price: "$450,000", type: "Residential", status: "Active", deal_owner: "Michael Lee"
    },
    {
        property_address: "45 Ocean Drive, Fort Lauderdale, FL", closing_date: "Feb 05, 2026", client_name: "Sarah Gomez",
        sale_price: "$790,000", type: "Condo", status: "Under Contract", deal_owner: "Emma Rivera"
    },
    {
        property_address: "890 Palm Ridge, West Palm Beach, FL", closing_date: "Jan 28, 2026", client_name: "Anthony Roberts",
        sale_price: "$1,250,000", type: "Commercial", status: "Closed", deal_owner: "David Kim"
    },
    {
        property_address: "200 Lakeview Blvd, Orlando, FL", closing_date: "Mar 10, 2026", client_name: "Emily Watson",
        sale_price: "$525,000", type: "Townhome", status: "Active", deal_owner: "Sophia Martinez"
    },
    {
        property_address: "77 Riverstone Ct, Tampa, FL", closing_date: "Feb 18, 2026", client_name: "Kevin Brooks",
        sale_price: "$350,000", type: "Residential", status: "Pending", deal_owner: "James Carter"
    },
    {
        property_address: "510 Sunset Bay Dr, Naples, FL", closing_date: "Mar 22, 2026", client_name: "Isabella Harper",
        sale_price: "$2,400,000", type: "Luxury", status: "Under Contract", deal_owner: "Natalie Fox"
    },
    {
        property_address: "66 Coral Springs Ave, Coral Springs, FL", closing_date: "Jan 30, 2026", client_name: "Christopher Allen",
        sale_price: "$610,000", type: "Single Family", status: "Closed", deal_owner: "Olivia Turner"
    }
];

export const PreDealDummyData = [
    {
        property_address: "123 Main St, Miami, FL", client_name: "John Peterson", type: "Residential",
        status: "Active",
        closing_date: "Jan 12, 2026", deal_owner: "Michael Lee"
    },
    {
        property_address: "45 Ocean Drive, Fort Lauderdale, FL", client_name: "Sarah Gomez", type: "Condo",
        status: "Under Contract", closing_date: "Feb 05, 2026", deal_owner: "Emma Rivera"
    },
    {
        property_address: "890 Palm Ridge, West Palm Beach, FL", client_name: "Anthony Roberts", type: "Commercial",
        status: "Closed", closing_date: "Jan 28, 2026", deal_owner: "David Kim"
    },
    {
        property_address: "200 Lakeview Blvd, Orlando, FL", client_name: "Emily Watson", type: "Townhome",
        status: "Active", closing_date: "Mar 10, 2026", deal_owner: "Sophia Martinez"
    },
    {
        property_address: "77 Riverstone Ct, Tampa, FL", client_name: "Kevin Brooks", type: "Residential",
        status: "Pending", closing_date: "Feb 18, 2026", deal_owner: "James Carter"
    },
    {
        property_address: "510 Sunset Bay Dr, Naples, FL", client_name: "Isabella Harper", type: "Luxury",
        status: "Under Contract", closing_date: "Mar 22, 2026", deal_owner: "Natalie Fox"
    },
    {
        property_address: "66 Coral Springs Ave, Coral Springs, FL", client_name: "Christopher Allen", type: "Single Family",
        status: "Closed", closing_date: "Jan 30, 2026", deal_owner: "Olivia Turner"
    }
];

export const ClosingDummydata = [
    {
        property_address: "123 Main St, Miami, FL", closing_date: "Jan 12, 2026", client_name: "John Peterson",
        type: "Residential", deal_owner: "Michael Lee"
    },
    {
        property_address: "45 Ocean Drive, Fort Lauderdale, FL", closing_date: "Feb 05, 2026", client_name: "Sarah Gomez",
        type: "Condo", deal_owner: "Emma Rivera"
    },
    {
        property_address: "890 Palm Ridge, West Palm Beach, FL", closing_date: "Jan 28, 2026", client_name: "Anthony Roberts",
        type: "Commercial", deal_owner: "David Kim"
    },
    {
        property_address: "200 Lakeview Blvd, Orlando, FL", closing_date: "Mar 10, 2026", client_name: "Emily Watson",
        type: "Townhome", deal_owner: "Sophia Martinez"
    },
    {
        property_address: "77 Riverstone Ct, Tampa, FL", closing_date: "Feb 18, 2026", client_name: "Kevin Brooks",
        type: "Residential", deal_owner: "James Carter"
    },
    {
        property_address: "510 Sunset Bay Dr, Naples, FL", closing_date: "Mar 22, 2026", client_name: "Isabella Harper",
        type: "Luxury", deal_owner: "Natalie Fox"
    },
    {
        property_address: "66 Coral Springs Ave, Coral Springs, FL", closing_date: "Jan 30, 2026", client_name: "Christopher Allen",
        type: "Single Family", deal_owner: "Olivia Turner"
    }
]


