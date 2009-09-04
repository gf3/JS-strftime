Screw.Unit(function() {
  describe ("Date#strftime", function() {
    var date;
    before (function(){
      // Sunday June 7, 2009 4:05:01 PM
      date = new Date("June 7, 2009 16:05:01");
    });
    
    it ("should return the abbreviated weekday name for `%a`", function() {
      expect(date.strftime("%a")).to(equal, 'Sun');
    });
    
    it ("should return the full weekday name for `%A`", function() {
      expect(date.strftime("%A")).to(equal, 'Sunday');
    });
    
    it ("should return the abbreviated month name for `%b`", function() {
      expect(date.strftime("%b")).to(equal, 'Jun');
    });
    
    it ("should return the full month name for `%B`", function() {
      expect(date.strftime("%B")).to(equal, 'June');
    });
    
    it ("should return the preferred local date and time representation for `%c`", function() {
      expect(date.strftime("%c")).to(equal, date.toLocaleString());
    });
    
    it ("should return the full month name for `%B`", function() {
      expect(date.strftime("%B")).to(equal, 'June');
    });
    
    it ("should return the padded day of month for `%d`", function() {
      expect(date.strftime("%d")).to(equal, '07');
    });
    
    it ("should return the day of month for `%e`", function() {
      expect(date.strftime("%e")).to(equal, '7');
    });
    
    it ("should return the padded military hour of the day for `%H`", function() {
      expect(date.strftime("%H")).to(equal, '16');
    });
    
    it ("should return the padded hour of the day for `%I`", function() {
      expect(date.strftime("%I")).to(equal, '04');
    });
    
    it ("should return the day of the year for `%j`", function() {
      expect(date.strftime("%j")).to(equal, '158');
    });
    
    it ("should return the military hour of the day for `%k`", function() {
      expect(date.strftime("%k")).to(equal, '16');
    });
    
    it ("should return the hour of the day for `%l`", function() {
      expect(date.strftime("%l")).to(equal, '4');
    });
    
    it ("should return the month of the year for `%m`", function() {
      expect(date.strftime("%m")).to(equal, '06');
    });
    
    it ("should return the minute of the hour for `%M`", function() {
      expect(date.strftime("%M")).to(equal, '05');
    });
    
    it ("should return the uppercase meridian indicator for `%p`", function() {
      expect(date.strftime("%p")).to(equal, 'PM');
    });
    
    it ("should return the lowercase meridian indicator for `%P`", function() {
      expect(date.strftime("%P")).to(equal, 'pm');
    });
    
    it ("should return the second of the minute for `%S`", function() {
      expect(date.strftime("%S")).to(equal, '01');
    });
    
    // it ("should return the week number of the current year starting from Sunday for `%U`", function() {
    //   expect(date.strftime("%U")).to(equal, 'xx');
    // });
    // 
    // it ("should return the week number of the current year starting from Monday for `%W`", function() {
    //   expect(date.strftime("%W")).to(equal, 'xx');
    // });
    
    it ("should return the day of the week for `%w`", function() {
      expect(date.strftime("%w")).to(equal, '0');
    });
    
    it ("should return the preferred representation for the date alone for `%x`", function() {
      expect(date.strftime("%x")).to(equal, date.toLocaleDateString());
    });
    
    it ("should return the preferred representation for the time alone for `%X`", function() {
      expect(date.strftime("%X")).to(equal, date.toLocaleTimeString());
    });
    
    it ("should return the abbreviated year for `%y`", function() {
      expect(date.strftime("%y")).to(equal, '09');
    });
    
    it ("should return the full year for `%Y`", function() {
      expect(date.strftime("%Y")).to(equal, '2009');
    });
    
    // it ("should return the time zone name for `%Z`", function() {
    //   expect(date.strftime("%Z")).to(equal, 'xxx');
    // });
    
    it ("should return the time zone expressed as a UTC offset for `%z`", function() {
      expect(date.strftime("%z")).to(equal, '-04:00');
    });
    
    it ("should return a literal `%` for `%%`", function() {
      expect(date.strftime("%%")).to(equal, '%');
    });
    
  });
});