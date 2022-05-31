import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_FlashCardStacksInput } from "../inputs/UserCreateOrConnectWithoutFK_FlashCardStacksInput";
import { UserCreateWithoutFK_FlashCardStacksInput } from "../inputs/UserCreateWithoutFK_FlashCardStacksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFK_FlashCardStacksInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFK_FlashCardStacksInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlashCardStacksInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_FlashCardStacksInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_FlashCardStacksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_FlashCardStacksInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
