function Activity(amount) {
this.setAmount (amount);
}

Activity.prototype.setAmount = (amount) => {
if(amount<=0) {
return false;
}
else{
this.amount = amount;
return true;
}
}
Activity.prototype.getAmount = () => { return this.amount; }

function Payment(amount, receiver) {
    Activity.call(this, amount);
    this.setReceiver(receiver);
}

Payment.prototype = Object.create(Activity.prototype);
Payment.prototype.constructor = Payment;

Payment.prototype.setReceiver = function (receiver) {
    this.receiver = receiver;
    return true;
};

Payment.prototype.getReceiver = function () {
    return this.receiver;
};

function Refund (amount, sender) {
this.setAmount (amount);
this.setSender (sender);
}
Refund.prototype = Object.create(Activity.prototype);
Refund.prototype.setSender = (sender) => {
this.sender = sender;
return true;
}
Refund.prototype.getSender = () => { return this.sender; }
