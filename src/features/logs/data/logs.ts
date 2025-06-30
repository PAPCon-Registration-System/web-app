export interface Log {
	id: number;
	status: string;
	name: string;
	email: string;
	time: string;
	updated: string;
}

export const logs: Log[] = [
	{
		id: 1,
		status: "checked-in",
		name: "Sarah Johnson",
		email: "sarah.j@email.com",
		time: "2 minutes ago",
		updated: "2 minutes ago",
	},
	{
		id: 2,
		status: "checked-in",
		name: "Michael Chen",
		email: "michael.c@email.com",
		time: "5 minutes ago",
		updated: "5 minutes ago",
	},
	{
		id: 3,
		status: "registered",
		name: "Emily Davis",
		email: "emily.d@email.com",
		time: "8 minutes ago",
		updated: "8 minutes ago",
	},
	{
		id: 4,
		status: "checked-in",
		name: "David Wilson",
		email: "david.w@email.com",
		time: "12 minutes ago",
		updated: "12 minutes ago",
	},
	{
		id: 5,
		status: "no-show",
		name: "Lisa Anderson",
		email: "lisa.a@email.com",
		time: "15 minutes ago",
		updated: "15 minutes ago",
	},
	{
		id: 6,
		status: "checked-in",
		name: "Robert Kim",
		email: "robert.k@email.com",
		time: "18 minutes ago",
		updated: "18 minutes ago",
	},
	{
		id: 7,
		status: "registered",
		name: "Amanda White",
		email: "amanda.w@email.com",
		time: "22 minutes ago",
		updated: "22 minutes ago",
	},
	{
		id: 8,
		status: "checked-in",
		name: "James Brown",
		email: "james.b@email.com",
		time: "25 minutes ago",
		updated: "25 minutes ago",
	},
];
