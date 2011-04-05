#!/usr/bin/env ruby
# point your browser to http://localhost:3125/[some file in this dir]

require 'socket'

def readoutput(_, docroot)
  begin 
    # reads relative to the pwd
    return File.read(`pwd`.strip + docroot + _.gets.split[1])
  rescue Exception => e 
    return e.to_s
  end
end

def runserver(port, docroot)
  puts "starting webserver on http://localhost:#{port}/ (docroot: #{docroot})\n"
  s = TCPServer.new(port)
  loop { 
    _ = s.accept
    _ << "HTTP/1.0 200 OK\r\n\r\n#{readoutput(_, docroot)}"
    _.close
  }
end

my_webserver = Thread.new {runserver(3333, '/my_webserver')}
static_content_server = Thread.new {runserver(4444, '/static_content_server')}
other_jsonp_server = Thread.new {runserver(5555, '/other_jsonp_server')}

puts "after started, browse to http://localhost:3333/example.html to see the widget\n"
my_webserver.join
static_content_server.join
other_jsonp_server.join

