import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CourseOnUserMaxAggregate", {
  isAbstract: true
})
export class CourseOnUserMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  CourseOnUserID!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HOLDER!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseID!: number | null;
}