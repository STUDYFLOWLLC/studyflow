import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CourseOnTermMaxAggregate", {
  isAbstract: true
})
export class CourseOnTermMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  CourseOnTermID!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  Index!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Color!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Nickname!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  IsNew!: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseID!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_TermID!: number | null;
}
