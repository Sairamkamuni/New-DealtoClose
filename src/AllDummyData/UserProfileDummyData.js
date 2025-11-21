// Template Dummy Data
export const checklistTemplateOptionsFOR = [
    { value: 1, label: "Buyer" },
    { value: 2, label: "Seller" },
    { value: 3, label: "Landlord" },
    { value: 4, label: "Tenant" },
];

export const checklistTemplateOptionsSTAGE = [
    { value: 1, label: "Pre-Listing" },
    { value: 2, label: "Pre-Offer" },
    { value: 3, label: "Active" },
    { value: 4, label: "Under Contract" },
    { value: 45, label: "Closed" },
];

export const templateTableData = [
    { template_title: "My Custom Buyer Flow", template_for: "Buyer", template_stage: "Active", date_added: "Nov 14, 2023" },
    { template_title: "Luxury Seller Onboarding", template_for: "Seller", template_stage: "Under Contract", date_added: "Nov 30, 2023", },
];

export const checklistTableData = [
    { name: "Initial Consultation Call", active_relative_to: "Buyer", timing: "Active", days: "Nov 14, 2023", assigned_to: "Agent" },
    { name: "Send Welcome Package Email", active_relative_to: "Buyer", timing: "Active", days: "Nov 14, 2023", assigned_to: "Agent" },
    { name: "Schedule Property Viewings", active_relative_to: "Buyer", timing: "Active", days: "Nov 14, 2023", assigned_to: "Agent" },
];

export const UserAgents = [
    { value: 1, label: "Ashley Niemela" },
    { value: 2, label: "Steve Kamuni" },
    { value: 3, label: "Raj Kamuni" },
    { value: 4, label: "John Doe" },];

export const UserTimings = [
    { value: 1, label: "Before" },
    { value: 2, label: "After" },
];

export const UserActionRelativeTo = [
    { value: 1, label: "Listing Date" },
    { value: 2, label: "Expiry Date" },
    { value: 3, label: "Effective Date" },
    { value: 4, label: "1st Initial Due Date" },
    { value: 5, label: "Loan Application Due Date" },
    { value: 6, label: "Association Application Due Date" },
    { value: 7, label: "Inspection Period Due Date" },
    { value: 8, label: "2nd Initial Due Date" },
    { value: 9, label: "Loan Commitment Due Date" },
    { value: 10, label: "Closing Date" },
];

export const DocumentsData = [
    { document_name: "FF. Credit Related to Buyer's Broker Compensation Rider (CR-7 FF)", document_date: "Jun 11, 2025", document_uploaded_by: "Raj Kamuni" },
    { document_name: "GG. Seller's Agreement with Respect to Buyer's Broker Compensation Rider (CR-7 GG)", document_date: "Jun 11, 2025", document_uploaded_by: "Raj Kamuni" },
    { document_name: "Exclusive Buyer Brokerage Agreement Transaction Broker (EBBA-7tb)", document_date: "Jun 11, 2025", document_uploaded_by: "Raj Kamuni" },
    { document_name: "Exclusive Buyer Brokerage Agreement Transaction Broker (EBBA-7tb)", document_date: "Jun 11, 2025", document_uploaded_by: "Raj Kamuni" },
    { document_name: "FF. Credit Related to Buyer's Broker Compensation Rider (CR-7 FF)", document_date: "Jun 11, 2025", document_uploaded_by: "Raj Kamuni" },
]

export const DocumentsAction = [
    { value: 1, label: "Edit" },
    { value: 2, label: "Require to Submit" },
    { value: 3, label: "Copy To" },
    { value: 4, label: "Download" },
    { value: 5, label: "Rename" },
    { value: 6, label: "Delete" },
];

export const userTeamTableData = [
    { name: "Alex Johnson", phone: "(972) 388-7714", email: "alex.johnson@example.com", title: "Lead Agent", type: "Admin", },
    { name: "Alex Johnson", phone: "(972) 388-7714", email: "alex.johnson@example.com", title: "Broker", type: "Admin", },
    { name: "Alex Johnson", phone: "(972) 388-7714", email: "alex.johnson@example.com", title: "Transaction Coordinator", type: "Admin", },
    { name: "Alex Johnson", phone: "(972) 388-7714", email: "alex.johnson@example.com", title: "Sale Agent", type: "Admin", },
    { name: "Alex Johnson", phone: "(972) 388-7714", email: "alex.johnson@example.com", title: "Manager", type: "Admin", },
];

export const UserTeamTitle = [
    { value: 1, label: "Lead Agent" },
    { value: 2, label: "Sales Manager" },
    { value: 3, label: "Transaction Coordinator" },
    { value: 4, label: "Seller Representative" },
    { value: 5, label: "Seniors Real Estate" },
    { value: 6, label: "Buyer Representative" },
];

export const UserTeamRole = [
    { value: 1, label: "Admin" },
    { value: 2, label: "Agent" },
    { value: 3, label: "Assistant" },
    { value: 4, label: "Manager" },
];

export const PreferencesDateFormat = [
    { value: 1, label: "MM/DD/YYYY" },
    { value: 2, label: "DD/MM/YYYY" },
    { value: 3, label: "YYYY/MM/DD" },
];

export const PreferencesCurrencyFormat = [
    { value: 1, label: "USD - US Dollar" },
    { value: 2, label: "GBP - British Pound" },
    { value: 3, label: "EUR - Euro" },
];

export const ProfileinitialFormData = {
    file_type: "",
    remark: "",
    files: "",
    full_name: "Alex Johnson",
    job_title: "Senior Sales Executive",
    email: "alex.johnson@example.com",
    phone: "555-123-4567",
    about_me:
        "Experienced sales professional with a decade of success in tech and SaaS. Passionate about building relationships and driving growth.",
    company_name: "SalesBoard Inc.",
    team_name: "Alpha Sales Team",
    street_address: "123 Innovation Drive",
    city: "Techville",
    state: "CA",
    zip_code: "94016",
    date_format: PreferencesDateFormat[0],
    currency_format: PreferencesCurrencyFormat[0],
    website: "https://www.salesboard.com",
    linkedin_profile: "https://linkedin.com/in/alexjohnson",
    twitter_profile: "https://twitter.com/alexsales",
    facebook_profile: "https://facebook.com/alex.salespro",
};

export const CurrentPlan = ["Pro Tier"];
export const NextBillingDate = ["Jan 1st, 2026"];
export const PaymentMethod = ["Visa ending in **** 1234"];

export const SettingBillingInfo = [
    { label: "Current Plan", value: CurrentPlan[0] },
    { label: "Next Billing Date", value: NextBillingDate[0] },
    { label: "Payment Method", value: PaymentMethod[0] },
];

export const SettinginitialFormData = {
    current_password: "123456",
    new_password: "123456",
    confirm_new_password: "6543211",
};