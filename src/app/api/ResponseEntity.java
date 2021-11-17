package app.api;

import com.sun.net.httpserver.Headers;

import app.api.ResponseEntity;

import lombok.Value;

@Value
public class ResponseEntity<T> {

    private final T body;
    private final Headers headers;
    private final StatusCode statusCode;
}
