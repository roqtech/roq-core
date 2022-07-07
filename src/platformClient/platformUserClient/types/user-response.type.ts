export type UserResponseType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  timezone: string;
  locale?: string;
  createdAt: Date;
  updatedAt: Date;
};
