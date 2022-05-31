import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_FlashCardStacksInput } from "../inputs/UserCreateWithoutFK_FlashCardStacksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFK_FlashCardStacksInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFK_FlashCardStacksInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlashCardStacksInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_FlashCardStacksInput;
}
