import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CourseMaxAggregate", {
  isAbstract: true
})
export class CourseMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  CourseID!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_SchoolID!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  IsOfficial!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Code!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title!: string | null;
}
