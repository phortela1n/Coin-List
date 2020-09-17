# 💵COINLIST

CoinList objective is offer the user the posibility of seeing visual information about his invests in crypto coins but also to The main purpose of the App is to offer the posibility to the user to see Git Hub data in a visual way. The graphics will be displayed using data from Git Hub API.

`Future place for the link of the App`

## **Initial Wireframe**

### Mobile layout

![Imagen](https://gyazo.com/d248705cae8d5985a7012fef5d50b2dc.png)

### Desktop layout

![Imagen](https://gyazo.com/fcda877d7aef5c6d4e5f2503cd5187c6.png)

---

## **Team**

- [Pablo Hortelano](https://github.com/phortela1n)

---

## **Technologies**

### Frontend

- Html5
- Css3 (FlexBox)
- Javascript (React,
  Redux,
  ES6)

### Backend

- NodeJs (Express)
- Mongodb (Mongoose)

### Testing

- Jest

### Other

- API-Client
- Material

### CoinList APIs

```
https://www.coinapi.io/

```

## **Workflow**

We are using this tools to develop the workflow

### - User Stories Map

**url** https://trello.com/b/A8lddbEk/coinlist-user-stories-map

### - Agile methodology with Trello

KANBAN board with Trello

**url:** https://trello.com/b/5RBF5ZkW/coinlist

### GIT

**url:** https://github.com/SkylabCoders/pablo-hortelano-coin-list

### Project structure

#### API STRUCTURE

- **In progress**

---

#### SRC TREE

```

UNDER CONSTRUCTON

```

---

## **USER STORIES**

## **1. Login component**

As a user
I want to log in with Google / Email /Linkedin
So that I can access the app

**Scenario #1**
Given an valid form, and a `Auth0` function
When user tries to log in
Then it should log sucesfully

**Scenario #2**
Given an empty form, and a `Auth0` function
When user tries to log in
Then it should throw an Error

**Scenario #3**
Given a wrong user or password, and a `Auth0` function
When user tries to log in
Then it should throw an Error

---

## **2. Landing component**

As a user
I want to see all my invests
So that I can see all the movements

**Scenario #1**
Given a `Landing` function
When I log in
Then it should load the coins which I'm a contribuitor

**Scenario #2**
Given a `Landing` function
When user have no coins
You have no coins, please add one or more

**Scenario #3**
Given a `Landing` function
When I select a coin's card
It should show me coin's movements

**Scenario #4**
Given a `Landing` function
When I select the delete feature
It should delete the entire coin chain

## **3. SubMenu component**

As a user
I want to navigate using a menu
So that I can navigate throught views

**Scenario #1**
Given a `SubMenu` function
When I select the a AddCoin anchor
Then it should load AddCoin component

**Scenario #2**
Given a `SubMenu` function
When I select the a AddMovement anchor
Then it should load AddMovement component

**Scenario #3**
Given a `SubMenu` function
When I select the a Refresh anchor
Then it should reload the page

## **4. Header component**

As a user
I want to navigate using a header menu
So that I can navigate throught views

**Scenario #1**
Given a `Header` function
When I select the a Landing anchor
Then it should load Landing component

**Scenario #2**
Given a `Header` function
When I select the a Profile anchor
Then it should load Profile component

**Scenario #3**
Given a `Header` function
When I select the a Data Centre anchor
Then it should load Data Centre component

**Scenario #4**
Given a `Header` function
When I select the a Log Out anchor
Then it should load Log Out component

## **5. AddCoin component**

As a user
I want to add coins
So that I can register coins that I am interested in

**Scenario #1**
Given an `AddCoin` function
When I select one coin an click next
Then it should load the second step with the operation details

**Scenario #2**
Given an `AddCoin` function
When I select no coin an click next
Then it should load the second step with no details

**Scenario #3**
Given an `AddCoin` function
When I read the operation detais and press confirm
Then it should upload the data to the database

**Scenario #4**
Given an `AddCoin` function
When I read the operation detais and press back
Then it should upload the previous step

**Scenario #5**
Given an `AddCoin` function
When I try to select a coin that I have added already
Then it should load that coin as disabled to prevent it

## **6. AddMovement component**

As a user
I want to add movements
So that I can register moves to have persistant data

**Scenario #1**
Given a `AddMovement` function
When I select all the required and click next
Then it should load the second step with the movement details

**Scenario #2**
Given a `AddMovement` function
When I don't fill the required data
Then it should load the next button as disabled

**Scenario #3**
Given a `AddMovement` function
When I read the movement detais and press confirm
Then it should upload the data to the database

**Scenario #4**
Given a `AddMovement` function
When I read the operation detais and press back
Then it should upload the previous step

**Scenario #5**
Given a `AddMovement` function
When I try to select a coin
Then it should load only the coins that I have

## **7. Data Center**

As a user
I want to see movements in a table
So that I can check all the moves in a visual way

---

---

```

```
