import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("UserOnStudyGroupMaxAggregate", {
  isAbstract: true
})
export class UserOnStudyGroupMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UserOnStudyGroupID!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  SendDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  AcceptDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  RemoveDate!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_StudyGroupID!: number | null;
}
