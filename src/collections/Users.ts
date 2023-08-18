import { hello } from 'Components/Test';
import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  labels: {
    singular: test(),
    plural: test(),
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;

function test() {
  const mystring = hello + 'world';
  return mystring;
}