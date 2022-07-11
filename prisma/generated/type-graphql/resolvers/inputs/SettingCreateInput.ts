import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFK_SettingsInput } from "../inputs/UserCreateNestedOneWithoutFK_SettingsInput";

@TypeGraphQL.InputType("SettingCreateInput", {
  isAbstract: true
})
export class SettingCreateInput {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  HasSeenWelcomeMessage?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  LastSeenWelcomeMessageAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_SettingsInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_SettingsInput | undefined;
}
