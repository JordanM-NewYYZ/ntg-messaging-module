# NTG Messaging Module
###General Use
To bring ease to email and messaging service retrieval and implementation, this module can be added to any project with minimal setup. Very basic HTML and CSS structure allows for ease of customizability.  


###Setup

1. Inside of the message controller, point the 'get request' on line 28 to the desired location. 
2. Utilize the directives as you see fit. There are examples provided in inbox.html.
  - The message summary directive can be nested inside of the message list directive template
  - The message details directive can be initialized from the "details" button inside of the summary directive
  - Each directive can be used independently. It is not necessary to nest them within each other if only one directive is desired 

###Information Available for Each Directive
Each directive has access to the same information. Information can be easily added or removed via the following attributes:

#####Basic Message Information
```
messages="msg" --> Retrieves a list of all message details (can be used to retrieve all information 
below if preferred)

from-who="msg.from" --> Retrieves the names of the message sender
subject="msg.subject" --> Retrieves the message subject
date="msg.date" --> Retrieves the message send date
details="msg.body" --> Retrieves the body of the message
message-status="msg.status" --> Retrieves the message status (read / unread)
message-priority="msg.priority" --> Retrieves whether or not the message is marked as urgent

*Where 'msg' is a message in an ng-repeat.
```

#####Basic Message Functions
```
archive-message="archiveMessage(msg)" --> Adds the message into an archived list and removes them from the 
active message inbox list

mark-as="markAs(msg)" --> Marks a message as urgent. An ng-class can be added for unique styling of these 
messages (see "Urgent Message Styling" example below)

check-priority="checkPriority(msg)" --> Can be used in conjunction with markAs() for ng-show/ng-hide. e.g: 
<button ng-click="markAs()" ng-show="checkPriority()">Mark Not Urgent</button> //
<button ng-click="markAs()" ng-show="!checkPriority()">Mark Urgent</button>

read-message="readMessage(msg)" --> Can be used to mark a message as read. e.g. When the message details 
directive is initialized via the message summary directive:
<a href="" ng-click="messagedetail='details'; readMessage()" class="ntg-details-button">Details</a>
On click, the message will be marked as read.

*Where msg is a message in an ng-repeat.
```

##### Urgent Message Styling
Unique styling can be added to urgent messages by using the following on your ng-repeat:
```
ng-class="{ntgurgentmessage: msg.priority == true}"
```


###Other Features
#####Filters
The following filters can be added as dropdown values for friendlier UX:
```
<div class="ntg-message-filters">
    <select ng-model="ntgAttrs">
        <option value="date" class="ntg-filter-option">Recent</option>
        <option value="-date" class="ntg-filter-option">Oldest</option>
        <option value="-status" class="ntg-filter-option">Unread</option>
        <option value="from" class="ntg-filter-option">From: A-Z</option>
        <option value="-from" class="ntg-filter-option">From: Z-A</option>
        <option value="-priority" class="ntg-filter-option">Urgent</option>
    </select>
</div>
```
Add the following filter to your message list:
```
orderBy: ntgAttrs
```

#####Counters
The following counters are available for message statistics:
```
<p class="ntg-total-message-count">Total Messages: {{ infoCounters.totalCount }}</p>
<p class="ntg-unread-message-count">Unread Messages: {{ infoCounters.unreadCount }}</p>
<p class="archived-message-count">Archived Messages: {{ infoCounters.archivedCount }}</p>
```


#####Search
Case-insensitive message search can be added using the following:
```
<div class="ntg-message-search">
    <input type="text" ng-model="ntgsearch" placeholder="Search..." class="ntg-search-bar">
</div>
```
Add the following filter to your message list:
```
filter: ntgsearch
```


###Future Features:
The following features are currently being developed:

1. Select multiple messages for use with markAs() / archiveMessage()
2. Deployment via bower / npm package
3. Reply / outgoing message service











