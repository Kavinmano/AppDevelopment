package com.kavin.main.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kavin.main.dto.request.OrderRequest;
import com.kavin.main.dto.response.CountResponse;
import com.kavin.main.dto.response.OrderResponse;
import com.kavin.main.service.OrderService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(path = com.kavin.main.constant.Api.ORDER)
@RequiredArgsConstructor
@Tag(name = "Order")
public class OrderController {

	private final OrderService orderService;

	@PostMapping("/add")
	public ResponseEntity<String> saveOrder(@RequestBody OrderRequest request) {
		boolean isSaved = orderService.saveOrder(request);
		return isSaved ? ResponseEntity.status(200).body("Order saved successfully!")
				: ResponseEntity.badRequest().build();
	}

	@GetMapping("/get/{uid}")
	public ResponseEntity<List<OrderResponse>> getOrders(@PathVariable Long uid) {
		List<OrderResponse> orderList = orderService.getOrders(uid);
		return !orderList.isEmpty() ? ResponseEntity.ok().body(orderList) : ResponseEntity.notFound().build();
	}

	@GetMapping("/getCount")
	public ResponseEntity<CountResponse> orderCount() {
		CountResponse countResponse = orderService.orderCount();
		return countResponse.getCount() != 0 ? ResponseEntity.ok().body(countResponse)
				: ResponseEntity.noContent().build();
	}
}
