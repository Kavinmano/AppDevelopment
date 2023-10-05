package com.kavin.main.service;


import java.util.List;

import com.kavin.main.dto.request.OrderRequest;
import com.kavin.main.dto.response.CountResponse;
import com.kavin.main.dto.response.OrderResponse;

public interface OrderService {

    boolean saveOrder(OrderRequest request);

    List<OrderResponse> getOrders(Long uid);

    CountResponse orderCount();

}

