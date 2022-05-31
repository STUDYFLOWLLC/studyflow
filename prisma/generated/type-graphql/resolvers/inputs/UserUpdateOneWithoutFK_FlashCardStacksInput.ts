import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_FlashCardStacksInput } from "../inputs/UserCreateOrConnectWithoutFK_FlashCardStacksInput";
import { UserCreateWithoutFK_FlashCardStacksInput } from "../inputs/UserCreateWithoutFK_FlashCardStacksInput";
import { UserUpdateWithoutFK_FlashCardStacksInput } from "../inputs/UserUpdateWithoutFK_FlashCardStacksInput";
import { UserUpsertWithoutFK_FlashCardStacksInput } from "../inputs/UserUpsertWithoutFK_FlashCardStacksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFK_FlashCardStacksInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFK_FlashCardStacksInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlashCardStacksInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_FlashCardStacksInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_FlashCardStacksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_FlashCardStacksInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFK_FlashCardStacksInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFK_FlashCardStacksInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_FlashCardStacksInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFK_FlashCardStacksInput | undefined;
}
