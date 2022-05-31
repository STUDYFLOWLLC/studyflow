import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_FlashCardStacksInput } from "../inputs/UserCreateWithoutFK_FlashCardStacksInput";
import { UserUpdateWithoutFK_FlashCardStacksInput } from "../inputs/UserUpdateWithoutFK_FlashCardStacksInput";

@TypeGraphQL.InputType("UserUpsertWithoutFK_FlashCardStacksInput", {
  isAbstract: true
})
export class UserUpsertWithoutFK_FlashCardStacksInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_FlashCardStacksInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFK_FlashCardStacksInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlashCardStacksInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_FlashCardStacksInput;
}
