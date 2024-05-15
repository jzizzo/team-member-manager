# Team Member Manager App

This app allows you to manage team members. The frontend is a React web app written in Typecsript. The backend uses Django.

## Dev instructions

### Prerequisites

- Node.js + NPM + NVM
- Python 3 + pip

### Local dev

This app currently only supports local dev environment

Backend:

1. Install backend dependencies `pip install -r requirements.txt`
2. Start the server `python manage.py runserver`
3. To access a Django dashboard to manage Team Members, open a web browser and navigate to `http://127.0.0.1:8000/api/team_members`

Frontend:

1. Navigate to frontend folder `cd frontend`
2. `nvm use` (you may need to the `nvm install 20.13.1` if you don't already have this version)
3. Install frontend dependencies `npm install`
4. Start React server `npm start`
5. Open a web broswer and navigate to `http://localhost:3000/`

## Usage instructions

### List Team Page

- Naivgate to the root page at `http://localhost:3000/` to see all team members. You can click on the plus in the top right to add a team member. You can click on an existing team member to edit that team member.

### Add Member Page

- Click on the Plus in the top right from the List Team Page or navigate to `http://localhost:3000/add`. Make sure to fill out all form data before saving your team member. On save, your team member will be created and you'll be naivgated back to the List Team Page.

### Edit Member Page

- Click on a team member in the List Team Page or navigate to `http://localhost:3000/edit/:{teamMemberId}` if you know the team members id. Make sure all fields are filled out before saving your team member. On delete, this team member will be deleted and you'll be navigated back to the List Team Page. On save, your team member will be created and you'll be naivgated back to the List Team Page.

## Troubleshooting

When adding or editing a team member, the following rules must apply:

- First name max length is 40 chars.
- Last name max length is 40 chars.
- Phone number max length is 10 chars. Do not add dashes, only numbers.
- Email must be unique and propertly formated (e.g., name@domain.com). Check to make sure another team member is not already using the email you're attempting to use as emails must be unique.
- Role must be selected as regular, or admin. New team members are set to regular by default.

- Issue: Frontend does not load:
  - Solution: Make sure the Django and React servers are running correctly.
- Issue: Changes not reflected immediately.
  - Solution: API errors are consoled in the dev console. You can also debug by checking the servers in your terminal to look for error messages.

## Closing

glhf;
