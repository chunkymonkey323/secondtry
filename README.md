# Development

### Link to Deployed Website
`https://chunkymonkey323.github.io/secondtry`

### Goal and Value of the Application
The goal of the application was to provide an easy shopping experience for any user.
The application was a World Cup Flags Shop that allowed users to purchase any flag for counries participating in the World Cup. Users were able to find their team by filtering through region or group number. Additionally, users could sort through their world ranking. Overall, users could add or remove to the cart, as well as, reset it.

### Usability Principles Considered
Here, I decided to use balance and have a section for filters, sorting, items, and cart. I made these titles the biggest to indicate that there were 4 main sections. From there, the items column/section had flags with relevant details that were in a smaller font size to indicate a lower status. Finally, I used contrast within the add and remove button for each item. Lastly, I decided to frame the cart as one with the items and price along with a reset button.

### Organization of Components
Within my application, I decided to use states to keep track of the type of items to be displayed, the cart of items, the price of the cart, and whether the items should be sorted. I also defined helpers such as: removeFromCart, updateCart, and a comparator function. 

Within the app component, I decided to have 4 different sections. The first one was the group of filter options. The second one was whether the items should be sorted or not. The third one was a column of team flags which would render accordingly to filter and sort options. The last section I had was the cart which listed items and their price.

Lastly, I had a team item component that contained all the relevant information about a team. 

### How Data is Passed Down Through Components
The team data is defined in a JSON file which includes image urls and other related info. This data is sorted if the state requires it, then the data is rendered only if the relevant type is specified in the state. For each item, there are two buttons, a button that adds the item to the cart and a button that removes the item from the cart. Upon clicking either button, the item itself is passed into its own function to update the cart and price states.

### How the User Triggers State Changes
The user can trigger a state change in 4 ways:
1) Selecting a filter
This updates the state to be whatever filter the user chose

2) Selecting a sorting criteria
This updates the state to indicate that sorting should be performed

3) Clicking add to cart button
This updates the cart with a new item and updated price

4) Clicking remove from cart button
This updates the cart by removing the item and updating the price

5) Clicking the reset button
This button changes the state of the cart and price to be empty and 0
