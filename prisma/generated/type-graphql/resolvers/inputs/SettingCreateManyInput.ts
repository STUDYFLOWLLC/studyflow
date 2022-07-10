import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SettingCreateManyInput", {
  isAbstract: true
})
export class SettingCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SettingID?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  HasSeenWelcomeMessage?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  LastSeenWelcomeMessageAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FK_UserID!: number;
}
