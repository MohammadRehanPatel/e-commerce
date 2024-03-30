package com.ecommerce.service;

import com.ecommerce.model.OrderItem;
import com.ecommerce.repository.OrderItemRepository;
import org.springframework.stereotype.Service;

@Service
public class OrderItemServiceImpl implements OrderItemService{

    private OrderItemRepository orderItemRepository;

    public OrderItemServiceImpl(OrderItemRepository orderItemRepository) {
        this.orderItemRepository = orderItemRepository;
    }

    @Override
    public OrderItem createOrderItem(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
    }
}
