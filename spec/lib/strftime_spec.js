Screw.Unit(function() {
  describe ("Date#strftime", function() {
    var date;
    before (function(){
      // Sunday June 7, 2009 4:05:01 PM
      date = new Date("Sun Jun 07 2009 16:05:01 GMT-0400 (EDT)");
    });
    
    describe("`%a`", function(){
      it ("should return the abbreviated weekday name", function() {
        expect(date.strftime("%a")).to(equal, 'Sun');
      });
    });
    
    describe("`%A`", function(){
      it ("should return the full weekday name", function() {
        expect(date.strftime("%A")).to(equal, 'Sunday');
      });
    });
    
    describe("`%b`", function(){
      it ("should return the abbreviated month name", function() {
        expect(date.strftime("%b")).to(equal, 'Jun');
      });
    });
    
    describe("`%B`", function(){
      it ("should return the full month name", function() {
        expect(date.strftime("%B")).to(equal, 'June');
      });
    });
    
    describe("`%c`", function(){
      it ("should return the preferred local date and time representation", function() {
        expect(date.strftime("%c")).to(equal, date.toLocaleString());
      });
    });
    
    describe("`%B`", function(){
      it ("should return the full month name", function() {
        expect(date.strftime("%B")).to(equal, 'June');
      });
    });
    
    describe("`%d`", function(){
      it ("should return the padded day of month", function() {
        expect(date.strftime("%d")).to(equal, '07');
      });
    });
    
    describe("`%e`", function(){
      it ("should return the day of month", function() {
        expect(date.strftime("%e")).to(equal, '7');
      });
    });
    
    describe("`%H`", function(){
      it ("should return the padded military hour of the day", function() {
        expect(date.strftime("%H")).to(equal, '16');
      });
    });
    
    describe("`%I`", function(){
      it ("should return the padded hour of the day", function() {
        expect(date.strftime("%I")).to(equal, '04');
      });
    });
    
    describe("`%j`", function(){
      it ("should return the day of the year", function() {
        expect(date.strftime("%j")).to(equal, '158');
      });
    });
    
    describe("`%k`", function(){
      it ("should return the military hour of the day", function() {
        expect(date.strftime("%k")).to(equal, '16');
      });
    });
    
    describe("`%l`", function(){
      it ("should return the hour of the day", function() {
        expect(date.strftime("%l")).to(equal, '4');
      });
    });
    
    describe("`%m`", function(){
      it ("should return the month of the year", function() {
        expect(date.strftime("%m")).to(equal, '06');
      });
    });
    
    describe("`%M`", function(){
      it ("should return the minute of the hour", function() {
        expect(date.strftime("%M")).to(equal, '05');
      });
    });
    
    describe("`%p`", function(){
      it ("should return the uppercase meridian indicator", function() {
        expect(date.strftime("%p")).to(equal, 'PM');
      });
    });
    
    describe("`%P`", function(){
      it ("should return the lowercase meridian indicator", function() {
        expect(date.strftime("%P")).to(equal, 'pm');
      });
    });
    
    describe("`%S`", function(){
      it ("should return the second of the minute", function() {
        expect(date.strftime("%S")).to(equal, '01');
      });
    });
    
    describe("`%U`", function(){
      it ("should return the week number of the current year starting from Sunday", function() {
        expect(date.strftime("%U")).to(equal, '23');
      });
      
      it ("should return the padded week number of the current year starting from Sunday for 'Jan 1, 2009'", function() {
        date = new Date("Jan 1, 2009")
        expect(date.strftime("%U")).to(equal, '00');
      });
    });
    
    describe("`%W`", function(){
      it ("should return the week number of the current year starting from Monday", function() {
        expect(date.strftime("%W")).to(equal, '22');
      });
    });
    
    describe("`%w`", function(){
      it ("should return the day of the week", function() {
        expect(date.strftime("%w")).to(equal, '0');
      });
    });
    
    describe("`%x`", function(){
      it ("should return the preferred representation for the date alone", function() {
        expect(date.strftime("%x")).to(equal, date.toLocaleDateString());
      });
    });
    
    describe("`%X`", function(){
      it ("should return the preferred representation for the time alone", function() {
        expect(date.strftime("%X")).to(equal, date.toLocaleTimeString());
      });
    });
    
    describe("`%y`", function(){
      it ("should return the abbreviated year", function() {
        expect(date.strftime("%y")).to(equal, '09');
      });
    });
    
    describe("`%Y`", function(){
      it ("should return the full year", function() {
        expect(date.strftime("%Y")).to(equal, '2009');
      });
    });
    
    describe("`%Z`", function(){
      it ("should return the time zone name", function() {
        expect(date.strftime("%Z")).to(equal, '+00:00');
      });
    });
    
    describe("`%z`", function(){
      it ("should return the time zone expressed as a UTC offset", function() {
        expect(date.strftime("%z")).to(equal, '-04:00');
      });
    });
    
    describe("`%%`", function(){
      it ("should return a literal `%`", function() {
        expect(date.strftime("%%")).to(equal, '%');
      });
    });
    
  });
});