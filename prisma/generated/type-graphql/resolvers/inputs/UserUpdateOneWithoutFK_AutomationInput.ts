import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_AutomationInput } from "../inputs/UserCreateOrConnectWithoutFK_AutomationInput";
import { UserCreateWithoutFK_AutomationInput } from "../inputs/UserCreateWithoutFK_AutomationInput";
import { UserUpdateWithoutFK_AutomationInput } from "../inputs/UserUpdateWithoutFK_AutomationInput";
import { UserUpsertWithoutFK_AutomationInput } from "../inputs/UserUpsertWithoutFK_AutomationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFK_AutomationInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFK_AutomationInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_AutomationInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_AutomationInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_AutomationInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_AutomationInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFK_AutomationInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFK_AutomationInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_AutomationInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFK_AutomationInput | undefined;
}
