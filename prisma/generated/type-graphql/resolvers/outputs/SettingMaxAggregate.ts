import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SettingMaxAggregate", {
  isAbstract: true
})
export class SettingMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SettingID!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  HasSeenWelcomeMessage!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  LastSeenWelcomeMessageAt!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID!: number | null;
}
