#!/usr/bin/env ruby
# point your browser to http://localhost:3125/[some file in this dir]

require 'socket'

def readoutput(_)
    begin 
      # reads relative to the pwd
      return File.read(`pwd`.strip + _.gets.split[1])
    rescue Exception => e 
      return e.to_s
    end
end

s = TCPServer.new(3125)
loop { 
    _ = s.accept
    _ << "HTTP/1.0 200 OK\r\n\r\n#{readoutput(_)}"
    _.close
}
