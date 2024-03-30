package com.ecommerce.controller;

import com.ecommerce.exception.CartItemException;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.CartItem;
import com.ecommerce.model.User;
import com.ecommerce.request.AddItemRequest;
import com.ecommerce.response.ApiResponse;
import com.ecommerce.service.CartItemService;
import com.ecommerce.service.CartService;
import com.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart_items")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    @Autowired
    private UserService userService;



    @DeleteMapping("/{cartItemId}")
    public ResponseEntity<ApiResponse> deleteCartItem(@PathVariable Long cartItemId,@RequestHeader("Authorization") String jwt)
        throws UserException, CartItemException{
        User user=userService.findUserProfileByJWt(jwt);
        cartItemService.removeCartItem(user.getId(),cartItemId);

        ApiResponse res=new ApiResponse();
        res.setMessage("Item Deleted From Cart");
        res.setStatus(true);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PutMapping("/{cartItemId}")
    public ResponseEntity<CartItem> updateCartItem(
            @RequestBody CartItem cartItem,
            @PathVariable Long cartItemId,
            @RequestHeader("Authorization") String jwt
    )throws UserException,CartItemException{
        User user=userService.findUserProfileByJWt(jwt);
        CartItem updatedCartItem= cartItemService.updateCartItem(user.getId(),cartItemId,cartItem);



        return new ResponseEntity<>(updatedCartItem, HttpStatus.OK);
    }

}
